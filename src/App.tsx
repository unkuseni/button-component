import { useState } from 'react';
import classNames from 'classnames';

import styles from './App.module.scss';
import { Button } from './components/button/button';
import Button_module from './components/button/button.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <h2>Buttons</h2>
            <hr />
            <div className={styles['button-div']}>
                <Button className="default" text={'Default'} disableShadow={false} />
                <Button className="outline" text={'Default'} disableShadow={false} />
                <Button className="text" text={'Default'} disableShadow={false} />
            </div>
            <div className={styles['button-div']}>
                <Button
                    className="default"
                    text={'Default'}
                    disableShadow={false}
                    color="Default"
                />
                <Button
                    className="default"
                    text={'Default'}
                    disableShadow={false}
                    color="Primary"
                />
                <Button
                    className="default"
                    text={'Default'}
                    disableShadow={false}
                    color="Secondary"
                />
                <Button className="default" text={'Default'} disableShadow={false} color="Danger" />
            </div>
            <div className={styles['button-div']}>
                <Button
                    className="default"
                    text={'Default'}
                    disableShadow={false}
                    color="Default"
                />
                <Button
                    className="default"
                    text={'Default'}
                    disableShadow={false}
                    color="Default"
                    disable={true}
                />
            </div>
            <div className={styles['button-div']}>
                <Button
                    className="default"
                    text={'Default'}
                    color="Default"
                    icons={true}
                    iconPos="left"
                />
                <Button
                    className="default"
                    text={'Default'}
                    disableShadow={false}
                    color="Default"
                    iconPos="right"
                    icons={true}
                />
            </div>
            <div className={styles['button-div']}>
                <Button
                    className="default"
                    text={'Default'}
                    disableShadow={false}
                    color="Default"
                    sizes="small"
                />
                <Button
                    className="default"
                    text={'Default'}
                    disableShadow={false}
                    color="Default"
                    sizes="medium"
                />
                <Button
                    className="default"
                    text={'Default'}
                    disableShadow={false}
                    color="Default"
                    sizes="large"
                />
            </div>
        </div>
    );
}

export default App;
