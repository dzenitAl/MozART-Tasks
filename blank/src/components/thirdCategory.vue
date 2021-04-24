<template>
    <Page class="sve" actionBarHidden="true">

        <ActionBar text="Treca kategorija" />

        <ScrollView orientation="vertical">

            <StackLayout orientation="vertical" class="glavni">
                <AbsoluteLayout @tap="$navigateBack">
                    <Label class="back"
                        style="background-color: blue; height: 60; width: 60; border-radius: 50%; " />
                    <Label class="back2"
                        style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                        <Label class="fas" textWrap="true">
                                <FormattedString>
                                    <Span text.decode="&#xf060;" fontAttributes="Bold"></Span>
                                </FormattedString>
                            </Label>
                </AbsoluteLayout>

                <AbsoluteLayout class="first" width="300" height="180"
                    backgroundColor="#ffe5d0" opacity="0.85%">
                    <Image
                        src="~/images/videoSlika.jpg"
                        isLoading="async" class="slikaVideo" height="170"
                        width="300" />

                    <AbsoluteLayout class="pola" width="150" height="220"
                        backgroundColor="#ffe5d0" opacity="0.9%" left="155"
                        top="-15">

                    </AbsoluteLayout>
                    <Label class="pola_tekst" text="12" />

                </AbsoluteLayout>

                <AbsoluteLayout class="opis" width="300" height="50"
                    backgroundColor="#ffe5d0" opacity="0.9%">
                    <Label class="tekst_naslov" text="Kategorija 1" />
                    <Label class="tekst_opis" text="MozART" />
                </AbsoluteLayout>


                <AbsoluteLayout class="second" width="300" height="180"
                    backgroundColor="#ffe5d0" opacity="0.9%">
                    <Image
                        src="~/images/videoSlika.jpg"
                        class="slikaVideo" height="170"
                        width="300" />

                    <AbsoluteLayout class="pola" width="150" height="220"
                        backgroundColor="#d5c5d7" opacity="0.7%" left="155"
                        top="-15">
                    </AbsoluteLayout>

                    <Label class="pola_tekst" text="8" />
                </AbsoluteLayout>

                <AbsoluteLayout class="opis" width="300" height="50"
                    backgroundColor="#ffe5d0" opacity="0.9%">

                    <Label class="tekst_naslov" text="Kategorija 2" />
                    <Label class="tekst_opis" text="MozART" />

                </AbsoluteLayout>
                    <!-- treci div -->
                <AbsoluteLayout class="third" width="300" height="180"
                    backgroundColor="#ffe5d0" opacity="0.9%">
                    <Image
                        src="~/images/videoSlika.jpg"
                         class="slikaVideo" height="170"
                        width="300" />

                    <AbsoluteLayout class="treci_pola" width="300" height="180"
                        backgroundColor="#d5c5d7" opacity="0.6%" >
                        
                    </AbsoluteLayout>

                    <Label class="pola_tekst" text="8" />
                </AbsoluteLayout>

                         
                <AbsoluteLayout class="opis" width="300" height="50"
                    backgroundColor="#ffe5d0" opacity="0.95%">
                    <Label class="tekst_naslov" text="Kategorija 3" />
                    <Label class="tekst_opis" text="MozART" />
                </AbsoluteLayout>



            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    export default {
        methods: {
            onItemTap: function(args) {
                console.log("Item with index: " + args.index + " tapped");
            },
            onButtonTap() {
                console.log("Button was pressed");
            }
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
    .fas {
        font-family: Font Awesome 5 Free, fa-solid-900;
        font-weight: 900;
        color: black;
        top: 40%;
        left: 30%;
        font-size: 30%;
    }
    .description-label {
        margin-bottom: 15;
    }
    .glavni{
    background-image:url("https://i.pinimg.com/564x/30/79/6f/30796f7dd77e06062526f81d6bdc5eaa.jpg");
    background-position: center;
    background-size: cover;
}
.first{
    margin-top: 10px;
}
StackLayout AbsoluteLayout{
    margin:5;
}
.back{
    margin: 10;
}
.back2{
    margin:17;
}
.tekst_naslov{
    color: #3b3a3a;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 14px;
    padding-top: 10px;
    padding-left: 30px;
}
.tekst_opis{
    color: gray;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: bold;
    padding-top: 60px;
    padding-left: 30px;
}
.pola_tekst{
    color: #3b3a3a;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
}
.slikaVideo{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
}
.treci_pola{
    margin: 0;
    height:100%;
}
.pola_tekst{
    font-size: 20px;
    padding-left: 570px;
    padding-top: 150px;
}
.opis{
    margin-bottom: 10px;
}
</style>