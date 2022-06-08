import styles from './AvailableMeals.module.css';
import Card from '../UI/Card'
import React from 'react';
import MealItem from '../Meals/MealItem/MealItem'
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Veg Noddles',
        description: 'Juicy and Tasty',
        price: 90,
    },
    {
        id: 'm2',
        name: 'Egg Biryani',
        description: 'Taste of Long Basmati and aromatic biryani spices',
        price: 179,
    },
    {
        id: 'm3',
        name: 'Chicken Biryani',
        description: 'Dum chicken and basmati at its best',
        price: 289,
    },
    {
        id: 'm4',
        name: 'Green Salads',
        description: 'Healthy...and green...',
        price: 75,
    },
];




const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map((items) => {
        return (
            <MealItem key={items.id} id={items.id} name={items.name} description={items.description} price={items.price} />
        )

    })
    return (
        <section className={styles.meals}>
            <Card>
                <ul>

                    {mealsList}


                </ul></Card>
        </section>
    )
}

export default AvailableMeals;