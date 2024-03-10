import { useStoryblokApi } from '@storyblok/astro'
import type { story } from "@/scripts/interfaces";


//   ========================================================================================
//   ===========================   Managing assets from storyblok ===========================
//   ========================================================================================
interface imageObject {
    fileName?: string;
    originalHeight?: number;
    originalWidth?: number;
    originalUrl?: string;
    originalFileType?: string;
    aspectRatio?: number;
    url?: string;
    height?: number;
    width?: number;
    fileType?: string;
}
type fileTypes = 'webp' | 'jpeg' | 'png' | 'avif';



class StoryblokAssetManager {
    public obj: imageObject = {} as imageObject; // The object is initialized here
    constructor(fileName: string) {
        this.obj.originalUrl = fileName;
        this.getImageData(this.obj.originalUrl)
        this.obj.height = this.obj.originalHeight;
        this.obj.width = this.obj.originalWidth;
        this.obj.url = this.obj.originalUrl;
        this.getAspect();
    }
    
    private getImageData(filename: string) {
        const imageArray = filename.split('/');
        if (imageArray.length !== 8) {
            throw new Error('Image array does not have the expected number of elements.');
        }
        const resolution = imageArray[5].split('x');
        const fileNameAndType = imageArray[7].split('.');
            this.obj.originalHeight= parseInt(resolution[0]);
            this.obj.originalWidth= parseInt(resolution[1]);
            this.obj.fileName= fileNameAndType[0];
            this.obj.fileType= fileNameAndType[1];      
            this.obj.originalUrl= filename;
    }    
    
    
    
    
    private getAspect() {
        this.obj.aspectRatio = this.obj.originalHeight / this.obj.originalWidth;
    }
    
    public setHeightFromAspect(){
        const width = this.obj.width;
        const aspectRatio = this.obj.aspectRatio;
        this.obj.height = width * aspectRatio;
    }

    public setWidthFromAspect(){
        const height = this.obj.height;
        const aspectRatio = this.obj.aspectRatio;
        this.obj.height = height / aspectRatio;
    }
    
    public setNewResolution(height: number, width: number) {
        height = height ?? 0;
        width = width ?? 0;
        let url= this.obj.originalUrl
        let nwUrl = this.obj.url
        this.obj.url = (!nwUrl)
            ? (`${url}/m/${width}x${height}`)
            : (nwUrl + width + 'x' + height);

        this.obj.width= width;
        this.obj.height= height;
        this.obj.url= `${url}/m/${height}x${width}`;
    }
    
    
    
    public setNewFileType(fileType: fileTypes) {
        this.obj.url = (!this.obj.url)
            ? (`${this.obj.originalUrl}/m/filters:format(${fileType})`)
            : (`${this.obj.url}/filters:format(${fileType})`);        
        this.obj.fileType = fileType;
    }
    
}









//   =========================================================================================
//   ===========================   Managing story's from storyblok ===========================
//   =========================================================================================
class StoryblokStoryManager {
    storyblokApi: any;

    constructor() {
        this.storyblokApi = useStoryblokApi();
    }
    public async createCollectionLists(collection: string) {
        const { data } = await this.storyblokApi.get('cdn/stories', {
            version: import.meta.env.DEV ? "draft" : "published",
            starts_with: `${collection}/`,
            is_startpage: false
        });
        return data.stories.map((story: story) => {
            return {
                title: story.name,
                badge: story.content.badge,
                slug: story.full_slug,
                description: story.content.description,
                image: story.content.heroImage,
                date: story.published_at,
                tags: story.tag_list,
            }
        });
    }
}


export { StoryblokAssetManager, StoryblokStoryManager };