---
title: Biagioni Automatiseren
description: Een bedrijf in Winterswijk had een oude Kastenpers staan waar de microcontroller besturing van defect was geraakt.
pubDate: Aug 10 2018
heroImage: "@/assets/projecten/biagioni-automatiseren/IMG_20180730_124609.webp"
slug: biagioni-automatiseren
categories:
    - Projecten
---

## De opdracht


![Biagioni Automatiseren](@/assets/projecten/biagioni-automatiseren/IMG_20180724_201920.webp)

De Kasten persmachine bij het bedrijf was niet meer operationeel door een probleem in de bijbehorende microcontroller welke de machine aanstuurde. Na inspectie bleek dat het niet in hardware of bedrading zat en dat alle signalen tot aan de microcontroller goed doorkwamen. De Microcontroller was een Philips 80C552 welke niet met hedendaagse AVR’s geprogrammeerd kon worden en als er een compatible programmeerder gevonden/aangeschaft werd was er een mogelijkheid dat de ROM (software) beveiligd was gezien de controller dat ondersteunde.

Omdat de machine op een dusdanige leeftijd was dat er geen documentatie of contactpersonen waren, werd besloten om de machine te upgraden naar een PLC-aansturing. Hierbij zou als eerste gericht worden op het snel weer draaiend maken van de machine en ervoor zorgen dat deze op een zeer betrouwbare manier zou kunnen functioneren. Ook zou rekening gehouden worden met mogelijke uitbreidingen welke makkelijk later ingevoerd konden worden zodat de machine nog lang behouden kon blijven met de nieuwe controller. Het hele project zou worden gedocumenteerd in een projectmap welke eigendom zou worden van het bedrijf zodat vervolgend onderhoud of upgrade bij alle partijen toegankelijk werd.

## De oplossing

De electrakast is gestript en opnieuw opgebouwd met een Siemens S7-1200+KTP700 HMI. De PLC en HMI zijn vervolgens in Tia Portal geprogrammeerd, er is gekozen voor Ladder gezien daar voorgaande kennis van was voor storingzoeken in het bedrijf. Vervolgens is deze kast aan de rest van de machine gepatcht en getest. De machine is vervolgens successvol in gebruik genomen na een korte instructie. De opstelling heeft nog een aantal jaar gedraaid zonder problemen tot de machine vervangen werd door een nieuwe.