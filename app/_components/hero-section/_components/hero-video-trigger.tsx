import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import React from "react";

const HeroVideoTrigger = () => {
    return (
        <div className=" flex w-fit items-center gap-2 self-end ">
            <p className="max-w-[408px]  max-xsmall:text-xs max-sm:text-sm max-sm:max-w-[300px] max-xsmall:max-w-[200px]  font-medium text-base text-right ">
                Watch MTN Chief Transformation Officer, Olubayo Adekanmbi, discuss working with Paystack.
            </p>
            <div>
                <Button className="bg-[#0da4db] size-10 max-sm:size-9 rounded-full flex justify-center items-center cursor-pointer transition-all">
                    <Play className="stroke-0 fill-white" />
                </Button>
            </div>
        </div>
    );
};

export default HeroVideoTrigger;
