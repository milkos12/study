import React from 'react';

export const Eyes = (props) => {
    let { r, cy, cx } = props
    return (
        <>
            <circle
                cx={-cx}
                cy={-cy}
                r={r}
            />
            <circle
                cx={cx}
                cy={-cy}
                r={r}
            />
        </>
    );
};

export default Eyes;