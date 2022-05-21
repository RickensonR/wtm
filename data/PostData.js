const testData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Some example text for a post',
        user: "user1",
        profilepic: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg",
        mainimg: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        user: "user2",
        profilepic: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Red_Panda_%2824986761703%29.jpg",
        mainimg: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Red_Panda_%2824986761703%29.jpg"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        user: "user3",
        profilepic: "https://upload.wikimedia.org/wikipedia/commons/b/be/Bicho-pregui%C3%A7a_3.jpg",
        mainimg: "https://upload.wikimedia.org/wikipedia/commons/b/be/Bicho-pregui%C3%A7a_3.jpg"
    },
];

const finalsData = [
    {
        id: '1',
        title: 'Ugh finals are so annoying...good vibes in my room though :)',
        user: "user1",
        profilepic: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg",
        mainimg: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg"
    },
];

const froshData = [
    {
        id: '2',
        title: 'Woohooo!! Class of 2026!!!',
        user: "user1",
        profilepic: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg",
        mainimg: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg"
    },
];

const dartyData = [
    {
        id: '3',
        title: 'Darty szn!! Come thru to Terman later for good vibes',
        user: "user1",
        profilepic: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg",
        mainimg: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg"
    },
];

const springData = [
    {
        id: '4',
        title: 'I love spring quarter...such good vibes',
        user: "user1",
        profilepic: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg",
        mainimg: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg"
    },
];

const DATA = {
    testData: testData,
    finalsData: finalsData,
    dartyData: dartyData,
    froshData: froshData,
    springData: springData,
    allData: finalsData.concat(dartyData, froshData, springData),
};

export default DATA;