// import "server-only";
"use server";

export async function getProducts(){
    const endpoint = "https://api.escuelajs.co/api/v1/products";
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
}