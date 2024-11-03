'use client';

import { Button } from "@/components/ui/button";
import { use, useCallback, useState } from "react";
import { getProducts } from "./actions";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function Page() {
    const [products, setProducts] = useState<any[]>([]);
    const onClick = useCallback(async () => {
        const data = await getProducts();
        setProducts(data);
    }, []);

    return (
        <div className="container mx-auto my-4">
            <Button onClick={onClick}>Get Products</Button>
            {JSON.stringify(products[0])}
            <Table>
                <TableBody>
                    {products.map((product, index) => {
                        return <TableRow key={index}>
                            <TableCell>{product?.title || "-+-"}</TableCell>
                            <TableCell>{product?.price || "-+-"}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </div >
    )
}