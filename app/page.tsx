import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
    return (
        <div className="p-10 bg-shop-light-pink">
            <h1 className="text-xl font-semibold">Home</h1>
            <p className="font-poppins antialiased">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                officia debitis quae nisi dolorem nulla quis nesciunt aliquam
                velit exercitationem voluptatem sint at earum suscipit iusto
                magni non alias nam, maxime eum nihil accusamus. Cum,
                repudiandae magni suscipit iste nulla reprehenderit optio
                laboriosam illo, deleniti ipsam itaque possimus quam magnam?
            </p>
            <Button variant="outline">open</Button>
        </div>
    );
};

export default Home;
