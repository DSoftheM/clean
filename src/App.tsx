import { A } from "@my/components/A";
import { B } from "@my/components/B";
import React, { useState } from "react";
import { sum } from "@my/components/utils/utils";

export function App(): JSX.Element {
    sum();
    return (
        <div>
            <A />
            <B />
        </div>
    );
}
