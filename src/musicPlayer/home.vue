<template lang="pug">

main.responsive.vertical-padding.vertical-margin
  .grid
    .s12.m6.l6.m.l
      article.round.no-padding.blur.no-elevate.page.active.left
        img.responsive.large-height.round(:src="'/dog.png'")
        .absolute.bottom.left.right.padding.bottom-shadow
          .medium-space
          nav
            nav.vertical.tiny-space
              h3.bold.no-padding.no-margin.white-text So U Kno
              h6.small.white-text Overmono
            .max
            button.border
              i favorite
          nav
            label.slider
              input(v-model="data.time" type="range")
              span
              .tooltip
          .medium-space
          nav.center-align.tiny-space
            button.extra.circle.large-padding.transparent
              <div class="shape sided-cookie6 max no-space rotate"></div>
              i pause
            button.fill.large.vertical-padding
              i skip_previous
            button.fill.large.vertical-padding
              i skip_next
    .s12.m6.l6.m.l
      article.round.large-padding.blur.no-elevate.page.active.top
        .grid
          .s12.m6
            a.row.round.medium-height
              img.responsive(:src="'/classic-utility-jacket.jpg'", @click="updateTheme('', '')")
            .space
            a.row.round.small-height
              img.responsive(:src="'/kids-jumpsuit.jpg'", @click="updateTheme('/kids-jumpsuit.jpg', 'Kids Jumpsuit')")
          .s12.m6
            a.row.round.small-height
              img.responsive(:src="'/dogtooth-style-jacket.jpg'", @click="updateTheme('/dogtooth-style-jacket.jpg', 'Dogtooth Style Jacket')")
            .space
            a.row.round.medium-height
              img.responsive(:src="'/retro-shoe.jpg'", @click="updateTheme('/retro-shoe.jpg', 'Retro Shoe')")
    .s12.s
      .space
      article.round.large-padding.blur.no-elevate.page.active.left
        label.slider
          input(v-model="data.time", type="range")
          span
          .tooltip
        .space
        nav
          img.large.round(:src="data.wallpaper")
          .max
            nav.center-align
              button.extra.circle.large-padding
                i play_arrow
              button.fill.large.vertical-padding
                i skip_previous
              button.fill.large.vertical-padding
                i skip_next
    .s12.s
      article.round.large-padding.blur.no-elevate.page.active.bottom
        nav.scroll
          .small-height.small-width.round
            img.responsive(:src="'/classic-utility-jacket.jpg'", @click="updateTheme('', '')")
          .small-height.small-width.round
            img.responsive(:src="'/kids-jumpsuit.jpg'", @click="updateTheme('/kids-jumpsuit.jpg', 'Kids Jumpsuit')")
          .small-height.small-width.round
            img.responsive(:src="'/dogtooth-style-jacket.jpg'", @click="updateTheme('/dogtooth-style-jacket.jpg', 'Dogtooth Style Jacket')")
          .small-height.small-width.round
            img.responsive(:src="'/retro-shoe.jpg'", @click="updateTheme('/retro-shoe.jpg', 'Retro Shoe')")
</template>

<script setup lang="ts">
import data from "./data";
import sharedDomain from "../shared/domain";
import utils from "../shared/utils";

async function updateTheme(source: string, title: string) {
  await sharedDomain.updateTheme(data.value, source || "#f9bd49");
  data.value.wallpaper = source || "/classic-utility-jacket.jpg";
  data.value.title = title || "Music Player";
  await reloadWallpaper();
}

async function reloadWallpaper() {
  data.value.showWallpaper = false;
  await utils.wait(100);
  data.value.showWallpaper = true;
}
</script>
