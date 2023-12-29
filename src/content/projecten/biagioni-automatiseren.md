---
title: Biagioni Automatiseren
description: Er was eens een bedrijf in Winterswijk met een oude Kastenpers. De microcontroller was kapot gegaan. Maar geen zorgen, we hebben het gefixt!
pubDate: Aug 10 2018
heroImage: https://a.storyblok.com/f/253533/4032x3024/58e766009f/img_20180724_201920.webp
slug: biagioni-automatiseren
categories:
    - Projecten
---

## Het Probleem
Bij een bedrijf in Winterswijk stond een oude Kastenpers. Een betrouwbare machine, maar helaas was de microcontroller kapot gegaan. Na een grondige inspectie bleek dat het probleem niet in de hardware of bedrading zat. Alle signalen kwamen goed door tot aan de microcontroller. Het probleem zat 'm in de microcontroller zelf, een Philips 80C552. Deze kon niet met hedendaagse AVR’s geprogrammeerd worden. En zelfs als we een compatibele programmeerder zouden vinden, was er een kans dat de ROM (software) beveiligd was.

Het bedrijf had geen documentatie of contactpersonen voor de machine, waarschijnlijk door de leeftijd van de machine. Daarom werd besloten om de machine te upgraden naar een PLC-aansturing.

## De Aanpak
Het eerste doel was om de machine zo snel mogelijk weer operationeel te krijgen. Maar we wilden ook een betrouwbare oplossing die rekening hield met mogelijke toekomstige uitbreidingen. Zo kon de machine nog lang meegaan met de nieuwe controller. We hebben het hele project gedocumenteerd in een projectmap. Deze map werd eigendom van het bedrijf, zodat toekomstig onderhoud of upgrades toegankelijk zouden zijn voor alle partijen.

## De Oplossing
We hebben de elektrakast gestript en opnieuw opgebouwd met een Siemens S7-1200+KTP700 HMI. De PLC en HMI zijn vervolgens in Tia Portal geprogrammeerd. We hebben gekozen voor Ladder, omdat het bedrijf daar al ervaring mee had voor het oplossen van storingen. Vervolgens hebben we deze kast aan de rest van de machine gekoppeld en getest. Na een korte instructie is de machine succesvol in gebruik genomen. De opstelling heeft nog een aantal jaar probleemloos gedraaid, tot de machine werd vervangen door een nieuwe.

![Biagioni Automatiseren](https://a.storyblok.com/f/253533/4032x3024/7fe77ad7ac/img_20180730_124609.webp)