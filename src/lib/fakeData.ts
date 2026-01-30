export const categories = [
    { id: 1, name: "Burgers", image: "" },
    { id: 2, name: "Pizza", image: "" },
    { id: 3, name: "Sushi", image: "" },
];

export let meals = [
    {
        id: 1,
        name: "Classic Burger",
        description: "Juicy beef burger with lettuce, tomato, and cheese",
        price: 8.99,
        image: "",
        isAvailable: true,
        categoryId: categories[0].id,
        providerId: "provider-1",
    },
    {
        id: 2,
        name: "Margherita Pizza",
        description: "Classic pizza with fresh tomatoes, mozzarella, and basil",
        price: 12.5,
        image: "",
        isAvailable: true,
        categoryId: categories[1].id,
        providerId: "provider-1",
    },
    {
        id: 3,
        name: "Salmon Sushi",
        description: "Fresh salmon sushi rolls",
        price: 15,
        image: "",
        isAvailable: true,
        categoryId: categories[2].id,
        providerId: "provider-2",
    },
];

export let orders = [
    {
        id: 4,
        status: "PENDING",
        totalAmount: 25.5,
        address: "123 Main Street",
        userId: "user-1",
        providerId: "provider-1",
        items: [
            { id: 5, mealId: meals[0].id, quantity: 2, price: 8.99 },
            { id: 6, mealId: meals[1].id, quantity: 1, price: 12.5 },
        ],
        createdAt: new Date(),
    },
    {
        id: 7,
        status: "DELIVERED",
        totalAmount: 15,
        address: "456 Market Street",
        userId: "user-2",
        providerId: "provider-2",
        items: [
            { id: 8, mealId: meals[2].id, quantity: 1, price: 15 },
        ],
        createdAt: new Date(),
    },
];
