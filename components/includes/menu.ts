export interface Menus {
    icon: string,
    title: string,
    items: this[]
}


export const menu: Menus[] = [
    {
        icon: '<HomeOutlinedIcon />',
        title: "Home",
        items: []
    },
    {
        icon: '<LocalLibraryOutlinedIcon />',
        title: "Education",
        items: [
            {
                icon: '<HomeOutlinedIcon />',
                title: "Report",
                items: []
            }
        ]
    },
    {
        icon: '<TrendingUpOutlinedIcon />',
        title: "Options",
        items: []
    },
    {
        icon: '<DescriptionOutlinedIcon />',
        title: "Blog",
        items: []
    }
];
