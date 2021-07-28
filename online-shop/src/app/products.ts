export interface Product {
    id : number;
    name : string;
    category : string;
    price : number;
    description : string;
}

export const products = [
    {
        id : 1,
        name : 'Lorem Ipsum',
        category : 'Lorem Ipsum',
        price : 150,
        description : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. '
    },
    {
        id : 2,
        name : 'Lorem Ipsum',
        category : 'Lorem Ipsum',
        price : 100,
        description : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. '
    },
    {
        id : 3,
        name : 'Lorem Ipsum',
        category : 'Lorem Ipsum',
        price : 75,
        description : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. '
    }
];