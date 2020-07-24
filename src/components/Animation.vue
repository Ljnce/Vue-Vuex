<template>
  <div id="animation">
    <kinesis-container class="container">
     <kinesis-element :strength="150">
        <img src="@/assets/logo.png" alt="logrocket logo">
     </kinesis-element>

     <!-- background-circles-props -->
     <kinesis-element strength="100" axis="x" transformOrigin="50% 100%" type="depth">
       <div class="circle circle-purple"></div>
     </kinesis-element>
     <kinesis-element strength="80" axis="y"  transformOrigin="backWheelOrigin">
       <div class="circle circle-purple1"></div>
     </kinesis-element>
     <kinesis-element  strength="50" distance="100">
       <div class="circle circle-purple2"></div>
     </kinesis-element>
     <kinesis-element strength="200" axis="y">
       <div class="circle circle-purple3" style="transition-property: transform; transition-duration: 1000ms; transform-origin: center center 0px; transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);"></div>
     </kinesis-element>
   </kinesis-container>

  </div>
</template>

<script>


export default {
  name: "Animation",
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
#animation {
text-align: center;
}

.container {
  height: 100px;
padding: 15rem 0;
background-color: #7749BD;
}

img {
  width: 80px;
}

.circle {
position: absolute;
border-radius: 100%;
}

.circle.circle-purple {
border: 10px solid #f2eafa;
opacity: 0.1;
width: 70px;
height: 70px;
left: 20%;
top: 50%;
}

.circle.circle-purple1 {
border: 15px solid #f2eafa;
opacity: 0.1;
width: 200px;
height: 200px;
right: -5%;
bottom: 17%;
}

.circle.circle-purple2 {
background-color: #f2eafa;
opacity: 0.1;
width: 5vw;
height: 5vw;
left: 20%;
bottom: 50%;
}

.circle.circle-purple3 {
border: 15px solid #f2eafa;
opacity: 0.3;
width: 3vw;
height: 3vw;
top: 80%;
left: 60%;
}
</style>
