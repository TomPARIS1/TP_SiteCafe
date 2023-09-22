"use client"

import {PRODUCTS_CATEGORY_DATA} from "tp-kit/data";
import {Button} from "tp-kit/components";
import { Checkbox, TextInput, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

export const ProductFilters = function(props) {
    const form = useForm({
        initialValues: {
            categoriesSlug: [],
            search: ''
        }
    });

    return (
        <Box maw={340}>
            <form onSubmit={form.onSubmit((values) => props.onChange(values))}>
                <div className="flex flex-col">
                    <TextInput
                        placeholder="Rechercher une boisson"
                        {...form.getInputProps('search')}
                    />
                    <Checkbox.Group
                        {...form.getInputProps('categoriesSlug', { type: 'checkbox'})}
                    >
                        {props.categories.map(category =>
                            <>
                                <Checkbox
                                    mt="md"
                                    value={category.slug}
                                    label={category.name + " (" + category.products.length + ")"}
                                    color="green"
                                />
                            </>)
                        }
                    </Checkbox.Group>
                    <Button type="submit" className="bg-green-500 mt-3" variant="light">Filtrer</Button>
                </div>
            </form>
        </Box>
    );
}