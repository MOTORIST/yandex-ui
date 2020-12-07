import React, { useState, RefObject } from 'react';

import { withAutoFocus } from '@yandex-lego/components/withAutoFocus';
import { Button } from '@yandex-lego/components/Button/Button.bundle/desktop';
import { Textinput } from '@yandex-lego/components/Textinput/Textinput.bundle/desktop';

function Input({ controlRef, ...rest }: { controlRef: RefObject<HTMLInputElement>; }) {
    return <Textinput ref={controlRef} {...rest} />;
}
const InputWithAutoFocus = withAutoFocus(Input);

export const Default = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <>
            <Button onClick={() => setIsFocused(true)} view="action" size="m"> Установить фокус </Button> &nbsp;
            <Button onClick={() => setIsFocused(false)} view="default" size="m"> Сбросить фокус </Button> <br /> <br />
            <InputWithAutoFocus view="default" focused={isFocused} size="m" />
        </>
    );
};
