import {createClient} from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.SUPABASE_URL
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY
export const supabase =
    createClient<Database>(supabaseUrl, supabaseAnonKey)

export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            category: {
                Row: {
                    id: number
                    name: string | null
                }
                Insert: {
                    id?: never
                    name?: string | null
                }
                Update: {
                    id?: never
                    name?: string | null
                }
                Relationships: []
            }
            company: {
                Row: {
                    id: number
                    name: string | null
                }
                Insert: {
                    id?: never
                    name?: string | null
                }
                Update: {
                    id?: never
                    name?: string | null
                }
                Relationships: []
            }
            image: {
                Row: {
                    alt: string | null
                    height: number | null
                    id: number
                    url: number | null
                    width: number | null
                }
                Insert: {
                    alt?: string | null
                    height?: number | null
                    id?: never
                    url?: number | null
                    width?: number | null
                }
                Update: {
                    alt?: string | null
                    height?: number | null
                    id?: never
                    url?: number | null
                    width?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "image_url_fkey"
                        columns: ["url"]
                        isOneToOne: false
                        referencedRelation: "url"
                        referencedColumns: ["id"]
                    },
                ]
            }
            location: {
                Row: {
                    id: number
                    name: string | null
                }
                Insert: {
                    id?: never
                    name?: string | null
                }
                Update: {
                    id?: never
                    name?: string | null
                }
                Relationships: []
            }
            skills: {
                Row: {
                    category: number | null
                    company: number | null
                    created_at: string | null
                    description: string | null
                    end_date: string | null
                    id: number
                    image: number | null
                    location: number | null
                    start_date: string | null
                    timeline_element: boolean | null
                    title: string | null
                    url: number | null
                }
                Insert: {
                    category?: number | null
                    company?: number | null
                    created_at?: string | null
                    description?: string | null
                    end_date?: string | null
                    id?: never
                    image?: number | null
                    location?: number | null
                    start_date?: string | null
                    timeline_element?: boolean | null
                    title?: string | null
                    url?: number | null
                }
                Update: {
                    category?: number | null
                    company?: number | null
                    created_at?: string | null
                    description?: string | null
                    end_date?: string | null
                    id?: never
                    image?: number | null
                    location?: number | null
                    start_date?: string | null
                    timeline_element?: boolean | null
                    title?: string | null
                    url?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "skill_category_fkey"
                        columns: ["category"]
                        isOneToOne: false
                        referencedRelation: "category"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "skill_company_fkey"
                        columns: ["company"]
                        isOneToOne: false
                        referencedRelation: "company"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "skill_image_fkey"
                        columns: ["image"]
                        isOneToOne: false
                        referencedRelation: "image"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "skill_location_fkey"
                        columns: ["location"]
                        isOneToOne: false
                        referencedRelation: "location"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "skills_url_fkey"
                        columns: ["url"]
                        isOneToOne: false
                        referencedRelation: "url"
                        referencedColumns: ["id"]
                    },
                ]
            }
            url: {
                Row: {
                    id: number
                    url: string | null
                }
                Insert: {
                    id?: never
                    url?: string | null
                }
                Update: {
                    id?: never
                    url?: string | null
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
    PublicTableNameOrOptions extends | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
                                     | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
                      ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
                               Database[PublicTableNameOrOptions["schema"]]["Views"])
                      : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
       Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
          Row: infer R
      }
      ? R
      : never
    : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
                                              PublicSchema["Views"])
      ? (PublicSchema["Tables"] &
         PublicSchema["Views"])[PublicTableNameOrOptions] extends {
            Row: infer R
        }
        ? R
        : never
      : never

export type TablesInsert<
    PublicTableNameOrOptions extends | keyof PublicSchema["Tables"]
                                     | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
                      ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
                      : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
                                                                            Insert: infer I
                                                                        }
      ? I
      : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
      ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
                                                             Insert: infer I
                                                         }
        ? I
        : never
      : never

export type TablesUpdate<
    PublicTableNameOrOptions extends | keyof PublicSchema["Tables"]
                                     | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
                      ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
                      : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
                                                                            Update: infer U
                                                                        }
      ? U
      : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
      ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
                                                             Update: infer U
                                                         }
        ? U
        : never
      : never

export type Enums<
    PublicEnumNameOrOptions extends | keyof PublicSchema["Enums"]
                                    | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
                     ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
                     : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
      ? PublicSchema["Enums"][PublicEnumNameOrOptions]
      : never
