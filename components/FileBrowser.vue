<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

class NavItem {
  to: string;
  label: string;
  icon: string;
  defaultOpen: boolean = false;
  children: NavItem[];

  constructor(label: string = "", to: string = "",
              icon: string = "material-symbols:text-snippet",
              children: NavItem[] = []) {
    this.to = to;
    this.label = label;
    this.icon = icon;
    this.children = children;
  }
}

const route = useRoute()
let { data: files } = await useAsyncData('all',() => {
  return queryCollection('content').all()
})


const items1 = ref<NavigationMenuItem[]>([])
files.value?.forEach((item) => {
  // remove the first item (name of the collection)
  let path = item.path.split('/').slice(2);
  let realName = item.id.split('/').slice(2);

  let open = route.path == item.path;
  let url = "/notes/";
  let initialItem = new NavItem();
  initialItem.defaultOpen = open;
  let currentItem = initialItem;

  // add the folder to the list and set current item as its child
  while (path.length>1) {
    currentItem.label = realName.shift()!;
    url += path.shift() + "/";
    currentItem.icon="material-symbols:folder"

    // create a new item
    let tmp = new NavItem();
    tmp.defaultOpen = open;
    currentItem.children.push(tmp);
    currentItem = tmp;
  }

  currentItem.to = url+path.shift();
  currentItem.label = realName.shift()!;
  items1.value.push(initialItem);
  }
)
</script>

<template>
  <UNavigationMenu orientation="vertical"
                   :items="items1"
                   highlight
                   color="accent"
                   highlight-color="accent"
                   class="data-[orientation=vertical]:w-full" />
</template>

<style scoped>

</style>