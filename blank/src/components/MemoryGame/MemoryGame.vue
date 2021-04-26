<template>
<Page class="sve" actionBarHidden="true">
    <ScrollView>
        <StackLayout orientation="vertical" class="glavni">

           <AbsoluteLayout class="btn-back">
                            <Label class="back"
                                style="background-color: blue; height: 60; width: 60; border-radius: 50%; " />
                            <Label class="back2"
                                style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                            <Label class="fas" textWrap="true">
                                <FormattedString>
                                    <Span text.decode="&#xf060;" fontAttributes="Bold"></Span>
                                </FormattedString>
                            </Label>
                            <!-- <Button class="fas" text.decode="&#xf060;" ></Button> -->
            </AbsoluteLayout>

   
          <GridLayout class="card1"></GridLayout>
          <GridLayout class="card2" ></GridLayout>
          <GridLayout class="card3" ></GridLayout>
          <GridLayout class="card4" ></GridLayout>
          <GridLayout class="card5" ></GridLayout>
          <GridLayout class="card6" ></GridLayout>
          <GridLayout class="card7" ></GridLayout>
          <GridLayout class="card8" ></GridLayout>



        </StackLayout>
    </ScrollView>
</Page>
</template>


<style scoped>
.fas {
        font-family: Font Awesome 5 Free, fa-solid-900;
        font-weight: 900;
        color: black;
        top: 40%;
        left: 30%;
        font-size: 30%;
    }
.glavni{
    background-image: url("~/images/memoryPoz.jpg");
  background-size: cover;
  background-position: center;
}
.card1{
    border: 5px solid black;
    height: 100px;
    width: 80px;

}



</style>