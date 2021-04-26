<template>
<Page class="page" actionBarHidden="true">
  
        <StackLayout orientation="vertical" class="all">

        <AbsoluteLayout class="btn-back" @tap="$navigateBack">
                                    <Label  class="back"
                                        style="background-color: blue; height: 60; width: 60; border-radius: 50%; " />
                                    <Label class="back2"
                                        style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                                    <Label class="fas" textWrap="true">
                                        <FormattedString>
                                            <Span text.decode="&#xf060;" fontAttributes="Bold"></Span>
                                        </FormattedString>
                                    </Label>
                                    <!-- <Button class="fas" text.decode="&#xf060;"  ></Button> -->
                    </AbsoluteLayout>
                    
                   <AbsoluteLayout class="container"  > 
                    <Label class="circle" left="130%" top="0%" > </Label>
                     <Label class="circle1" top="25%" left="85%" > </Label> 
                     <Label class="circle2" top="30%" left="207%" > </Label> 
                    <Label class="base" top="119%" left="150%"> </Label>
                    

                   </AbsoluteLayout>
                   <!-- <AbsoluteLayout class="container1" > 
                   </AbsoluteLayout> --> 

                    <!-- <Label class="circle"> </Label>
                    <Label class="circle"> </Label>
                    <Label class="base"> </Label> -->
                     

                   
            
        </StackLayout>
</Page>

</template>

<style scoped>
.fas {
        font-family: Font Awesome 5 Free, fa-solid-900;
        font-weight: 900;
        color: black;
        top: 42%;
        left: 31%;
        font-size: 30%;
    }
    /* .page{
        background-color:#ccc ;
    } */
    
    .all{
          background-image: url("~/images/memKategorije.jpg");
  background-size: cover;
  background-position: center;
    }
    /* .container{
        width: 600px;
        height: 600px;
        left:0;
       
        
        
    } */
       .circle{
        background:green;
        width:350px;
        height: 350px;
        border-radius: 70%;
      

    }
   
     .circle1{
         background:green;
        width:300px;
        height: 300px;
        border-radius: 70%;

        

    }
    .circle2{
        width:270px;
        height: 270px;
         background:green;
        border-radius: 70%;

        
    }
    .base{
        width:330px;
        height: 20px;
         background:green;

    }
    



</style>