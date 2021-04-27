<template>
<Page class="sve" actionBarHidden="true" >
<ScrollView>
<StackLayout orientation="vertical" class="glavni">

  <!-- <AbsoluteLayout class="btn-back">
                            <Label class="back"
                                style="background-color: blue; height: 60; width: 60; border-radius: 50%; " />
                            <Label class="back2"
                                style="background-color: #ffe5d0; height: 45; width: 45; border-radius: 50%; " />
                            <Label class="fas" textWrap="true">
                                <FormattedString>
                                    <Span text.decode="&#xf060;" fontAttributes="Bold"></Span>
                                </FormattedString>
                            </Label>
            </AbsoluteLayout> -->

             <StackLayout >

            <VideoPlayer id="nativeVideoPlayer"
            controls="true" loop="true" autoplay="false" height="500"
            src="https://youtu.be/Tc8JAGmdbRc" ></VideoPlayer>

            <!-- Remote file to test with https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4 -->

        </StackLayout>

          <!-- <exoplayer
        src="~/videos/morljubomor.mp4"
        autoplay="true"
        controls="false"
        height="300">
    </exoplayer> -->
<!-- <StackLayout>
            <VideoPlayer ref="player" :src="morljubomor" autoplay="true" height="300" @loadingComplete="videoCompleted" @finished="videoFinished" loop="false" />
        </StackLayout> -->
 <!-- <my-video :sources="video.sources" :options="video.options"></my-video> -->



</StackLayout>
</ScrollView>
</Page>
</template>
<script >
// import { Video } from 'nativescript-videoplayer';
//    import { Video } from 'nativescript-videoplayer';
//    const video = topmost().currentPage.getViewById('nativeVideoPlayer') as Video;

// import { Video } from 'nativescript-videoplayer';




</script>
<style scoped>
.glavni{
     background-image: url("~/images/diktatiPoz.jpg");
  background-size: cover;
  background-position: center;
}
</style>