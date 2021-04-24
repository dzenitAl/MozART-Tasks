<template>
        <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
        <ActionBar title="Home" />
        <GridLayout class="grid1">
            <GridLayout class="boxGlavni">
                <GridLayout class="label">
                    
                        <GridLayout class="span1" id="span1" ref="span1">
                            
                          <Image v-if="image1" :key="image1.id"  class="jedan"
                                 :src="image1.src" @tap="open(image1.id)"
                          
                           /> 
                           <!-- {{image1}} -->
                        </GridLayout>
                        <GridLayout class="span2" >
                          <!-- <Image :src="image2" class="dva" />  -->
                           <Image v-if="image2" :key="image2.id"  class="dva"
                                 :src="image2.src" 
                          
                           /> 
                             
                        </GridLayout>
                        <GridLayout class="span3">
                          <!-- <Image :src="image2" class="tri" />  -->
                           <Image v-if="image3" :key="image3.id"  class="tri"
                                 :src="image3.src" 
                          
                           /> 
                              

                        </GridLayout>

                </GridLayout>
            </GridLayout>

            <Button class="label1" @tap="turn" ></Button>
            <Label class="label2"  >

                <FormattedString>
                 <span class="labelText" :text="kategorijaTekst" textWrap="true"   />
                </FormattedString> 
                <!-- <Label class="labelText" :text="kategorijaTekst" textWrap="true" loaded="onLabelLoaded">

                </Label> -->
                
            </Label>
        </GridLayout>



    </Page>
    
</template>

<script>
  import GameBox from '../components/GameBox'
  import thirdCategory from '../components/thirdCategory'
  import Diktati from '../components/Diktati'
  export default {
      
      data(){
          return {
             index: 0,
      image1: null,
      image2:null,
      image3:null,
      kategorijaTekst:"",
      images: [{
          id: 1,
          src: "https://i.pinimg.com/564x/4c/f9/11/4cf911d9a5a73d6669a6ebc244fb31b0.jpg"
        
        },
        {
          id: 2,
          src: "https://i.pinimg.com/236x/84/cd/70/84cd7085e91c7e440ca4a210ec30972f.jpg"
          
        },
        {
          id: 3,
          src: "https://i.pinimg.com/564x/d0/86/8b/d0868bf19279f7c51532ba3d8ea8ccb0.jpg"
         
        }
     ]
        }
      },
    methods:{
            turn(){
                    //   var zapamti=this.image1;
                    //       this.image1=this.image2;
                    //     this.image2=zapamti;
                     if(this.index===0){
                         console.log("prvo sam usao u ovaj if uslov");
                    this.image1=this.images[1];
                    this.image2=this.images[0];
                        this.kategorijaTekst="Druga kategorija za rani školski uzrast od 7-8 godina";
                     this.index++;//vrijednost indexa je sada 1
                     }
                    else if(this.index===1){
                        console.log("srce mi je propo handzar");
                        this.image1=this.images[2]; //ovdje bi trebalo da uzme trecu sliku
                        this.image2=this.images[1];
                        this.image3=this.images[0];
                        this.kategorijaTekst="Treca kategorija za djecu koja su spremna učiti";
                        this.index++;
                    }else if(this.index===2){
                        console.log("treci uslov je kliknut");
                        this.image1=this.images[0];
                        this.image3=this.images[2];
                        this.kategorijaTekst="Prva kategorija za predskolski uzrast od 5-6 godina";
                        
                        this.index=0;
                    }
                    
            },
            open(id){
                
                if(id===1){
                    this.$navigateTo(GameBox);
                }else if(id==2) {
                    this.$navigateTo(Diktati);
                }else{
                    this.$navigateTo(thirdCategory);
                }
                console.log("When nothings goes right, go left");
            }
    },
     mounted() {
    this.image1=this.images[0];
    this.image2=this.images[1];
    this.image3=this.images[2];
    this.kategorijaTekst="Prva kategorija za predskolski uzrast od 5-6 godina";
  },
  }
</script>
<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';
    // Custom styles
    .fas {
        @include colorize($color: accent);
    }
    .info {
        font-size: 20;
        // horizontal-align: center;
        vertical-align: center;
    }
    .btn {
    font-size: 18;
}
.jedan{
    // display: block;
// //   margin-left: auto;
// //   margin-right: auto;
  border-radius: 200%;
        height: 450px;
        width: 420px;
}
.dva{
     border-radius: 200%;
        height: 450px;
        width: 420px;
}
.tri{
     border-radius: 200%;
        height: 450px;
        width: 420px;
}
.grid1{
    background-color: yellow;
    height: 100%;
    /* margin-bottom: 50px; */
    /* overflow: hidden; */
    border-style: 2px solid #fff;
}
.label{
    width: 1100px;
    height: 1110px;
    background-color: black;
    /* border-radius: 900px; */
    border-radius: 250%;
    margin-left: 800px;
    /* margin-left: 5px; */
    margin-bottom: 550px;
}
.label1{
     width: 200px;
    height: 200px;
    background-color: white;
    margin-right: 430px;
    margin-bottom: 550px;
    clip-path: polygon(72% 52%, 0 1%, 0 100%);
}
.label2{
    width: 800px;
    height: 800px;
    background-color: red;
    border-radius: 450px;
    margin-right: 450px;
    margin-top: 1000px;
   
}
.labelText{
    background-color: blueviolet;
   
    
    
}
.span1{
        /* clip-path: polygon(42% 52%, 0 10%, 0 100%); */
        /* clip-path: polygon(100% 100%, 100% 0, 0 50%); */
        background-color: white;
        /* margin-left: 0px; */
        margin-right: 520px;
        margin-bottom: 0px;
        border-radius: 250%;
        height: 450px;
        width: 450px;
        //  background-image: url("~/images/prva.jpg");
        //  background-size: cover;
        //  background-position: center;
        //  background-image: url("https://i.pinimg.com/564x/4c/f9/11/4cf911d9a5a73d6669a6ebc244fb31b0.jpg");
} 
  
.span2{
   
        background-color:white;
        height:450px;
        width: 450px;
        border-radius: 150%;
        margin-top: 550px;
        margin-left: 300px;
        //  background-size: cover;
        //  background-position: center;
        //  background-image: url("~/images/druga.jpg");
        // background-image: url('https://i.pinimg.com/564x/1a/c3/26/1ac326d2f2fd6924b17e5000f528a548.jpg');
}
.span3{
    border-radius: 150%;
    background-color: white;
    height:450px;
    width: 450px;
    margin-left: 340px;
    margin-bottom: 550px;
    //   background-size: cover;
    //      background-position: center;
    //     background-image: url("~/images/treca.jpg");
    //     background-image: url('https://i.pinimg.com/564x/d0/86/8b/d0868bf19279f7c51532ba3d8ea8ccb0.jpg');
}      
    #tekst{
        background-color: white;
        border-radius: 150%;
        width: 220px;
        height: 220px;
        position: relative;
        top:400px;
        right: 10px;
        
    }
   #PREDSKOLARCI{
       position: relative;
       left: 30px;
       top: 250px;
       font-weight: bold;
       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    
   }
   #MALIE_SKOLARCI{
    position: relative;
       left: 30px;
       top: 250px;
       font-weight: bold;
       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   }
   #VELIKI_SKOLARCI{
    position: relative;
       left: 30px;
       top: 250px;
       font-weight: bold;
       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   }
</style>