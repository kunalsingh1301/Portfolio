"use client"
import React, { useState } from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { leftside2 } from '@/constants/leftside';

function Leftsidebartwo() {
    const [isCollapsed, setIsCollapsed] = useState(true); // Initialize as collapsed

    const toggleCollapsible = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <section className="leftsidebar2">
            <div className="text-white">EXPLORER</div>

            <Collapsible>
                <CollapsibleTrigger
                    className="text-white"
                    onClick={toggleCollapsible}
                >
                    {isCollapsed ? '>' : 'v'} &nbsp;&nbsp;PORTFOLIO
                </CollapsibleTrigger>
                <CollapsibleContent className="text-white">
                    {leftside2 &&
                        leftside2.map((item) => {
                            return (
                                <div key={item.id} className='flex'>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: item.svg }}
                                    />
                                    <p>{item.desc}</p>
                                </div>
                            );
                        })}
                </CollapsibleContent>
            </Collapsible>
        </section>
    );
}

export default Leftsidebartwo;
