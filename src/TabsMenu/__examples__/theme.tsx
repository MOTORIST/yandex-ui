import React, { useState } from 'react';
import { TabsMenu } from '@yandex-lego/components/TabsMenu/desktop/bundle';

export const Theme = () => {
    const [activeTab, setActiveTab] = useState('search');

    return (
        <TabsMenu
            size="m"
            theme="normal"
            layout="horiz"
            tabs={[
                { id: 'search', onClick: () => setActiveTab('search'), content: 'Поиск' },
                { id: 'images', onClick: () => setActiveTab('images'), content: 'Картинки' },
                { id: 'video', onClick: () => setActiveTab('video'), content: 'Видео' },
            ]}
            activeTab={activeTab}
        />
    );
};
