class NavItem {
    to: string;
    label: string;
    icon: string;
    defaultOpen: boolean;
    children: NavItem[];

    constructor(
        label: string = "",
        to: string = "",
        icon: string = "material-symbols:text-snippet",
        children: NavItem[] = []
    ) {
        this.to = to;
        this.label = label;
        this.icon = icon;
        this.defaultOpen = true;
        this.children = children;
    }
}

export const useNavItems = async () => {
    const { data: files } = await useAsyncData("all", () =>
        queryCollection("content").all()
    );

    const items = ref<NavItem[]>([]);

    files.value?.forEach((item) => {
        const path = item.path.split("/").slice(2);
        const realName = item.id.split("/").slice(2);

        let parent = items.value.find((x) => x.label === realName[0]);
        const initialItem = new NavItem();

        while (parent) {
            path.shift();
            realName.shift();
            const tmp = parent.children.find((x) => x.label === realName[0]);
            if (!tmp) {
                parent.children.push(initialItem);
                break;
            }
            parent = tmp;
        }

        if (!parent) {
            items.value.push(initialItem);
        }

        let currentItem = initialItem;
        while (path.length > 1) {
            currentItem.label = realName.shift()!;
            path.shift();
            currentItem.icon = "material-symbols:folder";

            const tmp = new NavItem();
            currentItem.children.push(tmp);
            currentItem = tmp;
        }

        currentItem.to = item.path;
        currentItem.label = realName.shift()!;
    });

    console.log(items.value);
    return items;
};
