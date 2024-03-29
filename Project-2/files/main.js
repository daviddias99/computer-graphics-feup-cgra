//From https://github.com/EvanHahn/ScriptInclude
include=function(){function f(){var a=this.readyState;(!a||/ded|te/.test(a))&&(c--,!c&&e&&d())}var a=arguments,b=document,c=a.length,d=a[c-1],e=d.call;e&&c--;for(var g,h=0;c>h;h++)g=b.createElement("script"),g.src=arguments[h],g.async=!0,g.onload=g.onerror=g.onreadystatechange=f,(b.head||b.getElementsByTagName("head")[0]).appendChild(g)};
serialInclude=function(a){var b=console,c=serialInclude.l;if(a.length>0)c.splice(0,0,a);else b.log("Done!");if(c.length>0){if(c[0].length>1){var d=c[0].splice(0,1);b.log("Loading "+d+"...");include(d,function(){serialInclude([]);});}else{var e=c[0][0];c.splice(0,1);e.call();};}else b.log("Finished.");};serialInclude.l=new Array();

serialInclude( ['../lib/CGF.js'
                , 'MyScene.js'
                , 'MyInterface.js'
                , 'primitive_objects/Plane.js'
                , 'primitive_objects/MyQuad.js'
                , 'primitive_objects/MyUnitCubeQuad.js'
                , 'primitive_objects/MyTriangle.js'
                , 'primitive_objects/MyCylinder.js'
                , 'primitive_objects/MyCylinderWBottoms.js'
                , 'primitive_objects/MyRegPolygon.js'
                , 'primitive_objects/MySphere.js'
                , 'primitive_objects/MyCone.js'
                , 'primitive_objects/MyPyramid.js'
                , 'primitive_objects/MyPyramidWBottoms.js'
                , 'primitive_objects/MyPrism.js'
                , 'primitive_objects/MyPrismWBottoms.js'
                , 'bird/MyBirdBody.js'
                , 'bird/MyBirdHead.js'
                , 'bird/MyBirdWing.js'
                , 'bird/MyBird.js'
                , 'lsystems/MyLSystem.js'
                , 'lsystems/MyAnimatedLSystem.js'
                , 'lsystems/MyLightning.js'
                , 'lsystems/MyLightningSegment.js'
                , 'lsystems/MyLSPlant.js'
                , 'lsystems/MyLeaf.js'
                , 'lsystems/MyBranch.js'
                , 'MyTreeBranch.js'
                , 'MyTerrain.js'
                , 'MyCubeMap.js'
                , 'MySkybox.js'
                , 'MyNest.js'
                , 'MyEgg.js'
                , 'MyHouse.js'
                ,

main=function()
{
    var app = new CGFapplication(document.body);
    var myScene = new MyScene();
    var myInterface = new MyInterface();
    
    app.init();

    app.setScene(myScene);
    app.setInterface(myInterface);

    myInterface.setActiveCamera(myScene.camera);

    app.run();
}

]);