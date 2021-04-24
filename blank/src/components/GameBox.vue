<template>
    <Page class="sve" actionBarHidden="true">

<ScrollView>

        <StackLayout orientation="vertical" class="glavni">

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


            <AbsoluteLayout class="prvi">
                    <Label class="memory" text=" Memory " textAlignment="center"></Label>
            </AbsoluteLayout>
            <AbsoluteLayout class="drugi">
                <Label class="pazl" text=" Puzzle " textAlignment="center"></Label>
            </AbsoluteLayout>
             <AbsoluteLayout class="treci">
                <Label class="hear" text=" Prepoznaj instrument " textAlignment="center"></Label>
            </AbsoluteLayout>

            
            <!-- <AbsoluteLayout class="prvi" width="250" height="180"
                >
                <Image
                    src="~/images/puzle.png"
                     class="pazl" />
                <Label class="memory" text="Memory--" backgroundColor="white"
                    left="0" textWrap="true" textAlignment="center"
                    textTransform="capitalize" top="153" ></Label>
            </AbsoluteLayout>
            <AbsoluteLayout class="drugi" width="250" height="180"
                >
                <Image
                    src="~/images/mem.png"
                     class="slikaMemory"  />
                <Label class="memory" text="Slagalica" backgroundColor="white"
                    left="0" textWrap="true" textAlignment="center"
                    textTransform="capitalize" top="153" />
            </AbsoluteLayout>
            <AbsoluteLayout class="treci" width="250" height="180" >
                <Image
                    src="~/images/staCujes.jpg"
                     class="edin" strech="aspectFill" />
                <Label class="staCujes" text="Prepoznaj zvuk instumenta--"
                    backgroundColor="white" left="0" textWrap="true"
                    textAlignment="center" textTransform="capitalize"
                    top="153" />
            </AbsoluteLayout> -->
        </StackLayout>

        </ScrollView>
    </Page>
</template>

<script>
    export default {
        methods: {
          
        },
        data() {
            return {
                textFieldValue: ""
            };
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }
    .far {
        font-family: Font Awesome 5 Free, fa-regular-400;
        font-weight: 400;
    }
    .fab {
        font-family: Font Awesome 5 Brands, fa-brands-400;
        font-weight: 400;
    }
    .fas {
        font-family: Font Awesome 5 Free, fa-solid-900;
        font-weight: 900;
        color: black;
        top: 42%;
        left: 31%;
        font-size: 30%;
    }
    .description-label {
        margin-bottom: 15;
    }
</style>