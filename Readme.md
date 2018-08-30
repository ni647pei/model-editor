![Logo](https://bytebucket.org/woodsideproject/3dmodeleditor/raw/acf3fb3daf2969472859005885a389409ac3fd36/editor/images/logo/favicons/android-chrome-192x192.png?token=fe82e565c160c1450b370af5b39976062bd092de)

# LNG Model Editor

###### This editor was built on top of the [ Three.js Editor ](https://threejs.org/editor/). 

* [ Three.js Doc ](https://threejs.org/docs/)
* [ Github ](https://github.com/mrdoob/three.js)

### Table of Contents
- [ Become a pro user in 5 minutes ](https://github.com/ni647pei/model-editor#markdown-header-become-a-pro-user-in-5-minutes)

- [ Bugs waiting to be fixed ](https://bytebucket.org/woodsideproject/3dmodeleditor/overview#markdown-header-bugs-waiting-to-be-fixed)

- [ Features for the Future ](https://bytebucket.org/woodsideproject/3dmodeleditor/overview#markdown-header-features-for-the-future)

***

## Become a pro user in 5 minutes 

#### The interface 
![Editor interface](https://bytebucket.org/woodsideproject/3dmodeleditor/raw/aeb28b8aeb1f30cbc3a2aac7c1bfb200592a1769/screen.jpg?token=048f5651e032860a4427017c1dbef05a71f51fb4)

#### Adding new shapes
* Move your mouse to the left and a hidden menu with all the basic shapes will show up. 

#### Editing the goemetry
* Use **GEOMETRY** tag at the right menu to edit the parameters of the selected object.
* **Only the shapes from the left menu have geometries that can be edited** (except for groups).
* To create a customized geometry that is not provided in this editor, go to the three.js file in the "build" folder and write some codes.

#### Navigating Around the Model 
* Drag with the left mouse button to **rotate** in viewport.
* Drag with the right mouse button to **pan** in viewport.
* Use the mouse wheel to **zoom in and out**.
* Use the buttons at the top right corner of the viewport to switch between different views of the selected object.

#### Translate, rotate and scale 
* Go to **OBJECT** tag at the sidebar and edit the parameters of the object's position, rotation and scale.
* Or control the gumball on the selected object directly. 
* For a more precise control using gumball, check the **snap** checkbox at **Toolbar** and edit the size of the **grid** so that it move in that certain interval.
* Shortcut keys: **W**-Translate  **E**-Rotate. **R**-Scale.
* For **alignment**, select the objects you want to align and use the floating panel that shows up. The object will be aligned to **the first selected object**.

#### Grouping 
* There are 2 ways to group the objects:  
    * Add an empty group from the **left menu** or find it from **ADD** at the menu bar, then from the scene outliner **drag** the object into the group you created.
    * Use Ctrl-click to select multiple objects and from the floating panel click the first button to group them.  

* To ungroup them, simply select that group and click the ungroup button (the first one) on the floating panel, or from the scene outliner drag the objects one by one out of the group.

#### Reseting the center of the object 
* **If the object has geometry**, from the OBJECT tag at the sidebar, you can use the 3 icons to reset it's origin.
* If you click on the same button multiple times, the center will be switched between different corners or planes of the bounding box.
* Since the object needs to be a geometry to get it done, if you want to reset the center of a non-geometry, a group, for example, you can **merge them into a single geometry first** by pressing the MERGE button under the OBJECT tag of the sidebar. However, [ it doesn't work on the groups that's been cloned ](https://bytebucket.org/woodsideproject/3dmodeleditor/overview#markdown-header-centering).
* Note that **the object's position will also be reset** to world center after it's center get reset. Check [ the bug list ](https://bytebucket.org/woodsideproject/3dmodeleditor/overview#markdown-header-multiple-selection).


#### Saving your work
* To keep the geometries of the objects so that they can be edited by the editor next time, **select the group** you want to save then go to FILE - Save Object. It will be saved as a .json file. 
* To export to .obj file, select the group then FILE - Export OBJ.

***
## Bugs waiting to be fixed

#### Multiple selection 
- The multiple selection only starts "after" Ctrl is pressed. In other words, it doesn't include the one that is already selected before you press Ctrl.

- After the multiple selection was used and the objects get deleted, if the editor hasn't been refreshed or closed, you will find some  "ghost objects" - the empty bounding boxes of the previous objects that cannot be removed. Once you refresh they're gone.

- The center of the selected objects will always stay at world center(0,0,0), no matter where the children are.


#### Centering 
- The object will be moved to world center after its origin get reset.

- Reset Center doesn't work properly on objects that have been rotated.

- MERGE doesn't seem to work on the cloned groups. For now, if you want to merge some cloned items, the only way to do it is to ungroup them.

#### The Y and Z axis
- The default up/down axis is Y in Three.js but I made it to be Z axis by rotating the grid and all the shapes 90 degree. That's why the default rotation of every shape is 90 degree in X axis.

***

## Features for the Future
#### 1. Make the items listed in the scene outliner collapsible. 
- Instaed of listing every object in the scene, make them collapsible to prevent the pain of scrolling if there are too many objects in the scene.
![Editor interface](https://bytebucket.org/woodsideproject/3dmodeleditor/raw/01f0401979b8949a1c7cebf951bc49a8ae37ab27/future/collapsible%20example.jpg?token=016f2ff87b73769c1b7ce5e29fb99c92e3c66899)

#### 2. A palette of user-generated models
- Step 1. Go to FILE - Create Model.
- Step 2. A panel pops up where users can rename the basic shapes' parameters for the new model, and lock some of the parameters together. While editing, the bounding box of the corresponding shape would show up at the left screen.
![Editor interface](https://bytebucket.org/woodsideproject/3dmodeleditor/raw/94a626f769b7d04cc0eb02ae0846e065aa8d44d2/future/resources/create_model.png?token=8875bebec5996e161c466b4164886ebb01166940)

- Step 3. Confirm the created model with new parameters. Users can change the order of the parameters which will be display at the sidebar later if it's added to the scene.
![Editor interface](https://bytebucket.org/woodsideproject/3dmodeleditor/raw/94a626f769b7d04cc0eb02ae0846e065aa8d44d2/future/resources/create_model_confirm.png?token=466acb1c7b293575b7d5e84413d65cab0e180d54)

- Step 4. Once the model is created, it can be called out by ADD - Model.

- Step 5. Choose the model to be added to the scene.
![Editor interface](https://bytebucket.org/woodsideproject/3dmodeleditor/raw/94a626f769b7d04cc0eb02ae0846e065aa8d44d2/future/resources/Add_model.png?token=7cdc7c09c10ed97124aacf2176e02fc83851695d)

- Step 6. You can now directly edit the model with the new parameters!
![Editor interface](https://bytebucket.org/woodsideproject/3dmodeleditor/raw/01f0401979b8949a1c7cebf951bc49a8ae37ab27/future/new%20parameters.jpg?token=0bc3cc3466d05a2adc1e88ff27e39ee2dca48bfb)
