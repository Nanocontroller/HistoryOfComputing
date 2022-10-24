# History Of Computing

## Project Description

This project uses [a google spreadsheet](https://docs.google.com/spreadsheets/d/1u_ZMDIF0vk718AzKeD3iGzv5BXSBvxNJdlmltV7HGl0/edit?usp=sharing) with data from events in the history of computing. 
The data is exported in JSON format and used to generate the timeline with JavaScript and formatted with css. 


## Updating content
There are three main steps to updating content on the website:

1. Preparing images
2. Editing content on the google spreadsheet
3. Updating files to the project folder

---

## Updating and editing the timeline:

### 1. Preparing images:
	* **Image preparation** [Figma template](https://www.figma.com/file/W8ChwB3qHAnRvmBoTpsqk0/History-of-Computing---Template?node-id=0%3A1) / [Photoshop template](https://drive.google.com/drive/folders/17NApWjLOzARIUxsEhXs5ns6BUC-oxgtH?usp=sharing)
		- Export featrue image (recommended naming convention: 'ft' + year + ".png", example: ft1990.png )
		- Export people icon image (recommended naming convention: 'th' + name + ".png", example: th_Bair.png )

### 2. Editing content on google spreadsheet:
The spreadsheet is designed to accommodate multiple events within the same year. If there is only one event, the rest of the cells shuold be blank.

| Year | Decade | feature_Text | feature_Img | event1_Text | xxx |
| --- | --- | --- | --- | --- | --- |
| Year of event | decade | highlight feature info | Image | event | so on... |
| yyyy | yyyy |  1 | --2- | 3 | 4 | 


1. **Editing text**
		1. *decade_text* (summary text for the decade): Max 250 characters 
		1. *feature_text* (description text for the specific year): Max 250 characters
		- *event*: Max 250 characters
		- *system*: Max 250 characters
		- *personName*
		- *personTitle*
1. **Exporting JSON file format**
		- google spreadsheet -> Export JSON [(video instruction)](https://drive.google.com/file/d/1ZViOpQgwrdB-Kl7UiYf7MBo0cRa93zLl/view?usp=sharing)
		
### 3. Updating files to the project folder:
	1. Replace existing "data.json" file
	2. Upload new images to the images folder

---

## Previews 

![desktop screen capture](hoc-desktop.png)

![mobile screen capture](hoc-mobile.jpg)
