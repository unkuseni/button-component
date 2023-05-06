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
                <div className={styles.label}>
                    <p>Button</p>
                    <Button className="default" text={'Default'} disableShadow={false} />
                </div>
                <div className={styles.label}>
                    <p>Outline</p>
                    <Button className="outline" text={'Default'} disableShadow={false} />
                </div>
                <div className={styles.label}>
                    <p>Text</p>
                    <Button className="text" text={'Default'} disableShadow={false} />
                </div>
            </div>
            <div className={styles['button-div']}>
                <div className={styles.label}>
                    <p>Button</p>
                    <Button className="default" text={'Default'} disableShadow={false} />
                </div>
                <div className={styles.label}>
                    <p>Button</p>
                    <Button
                        className="default"
                        text={'Primary'}
                        disableShadow={false}
                        color="Primary"
                    />
                </div>
                <div className={styles.label}>
                    <p>Button</p>
                    <Button
                        className="default"
                        text={'Secondary'}
                        disableShadow={false}
                        color="Secondary"
                    />
                </div>
                <div className={styles.label}>
                    <p>Button</p>
                    <Button
                        className="default"
                        text={'Danger'}
                        disableShadow={false}
                        color="Danger"
                    />
                </div>
            </div>
            <div className={styles['button-div']}>
                <div>
                    <p>Active</p>
                    <Button
                        className="default"
                        text={'Default'}
                        disableShadow={false}
                        color="Default"
                    />
                </div>
                <div>
                    <p>disabled</p>
                    <Button
                        className="default"
                        text={'Default'}
                        disableShadow={false}
                        color="Default"
                        disable={true}
                    />
                </div>
            </div>
            <div className={styles['button-div']}>
                <div>
                    <p>icon start</p>
                    <Button
                        className="default"
                        text={'Default'}
                        color="Default"
                        icons={true}
                        iconPos="left"
                    />
                </div>
                <div>
                    <p>icon end</p>
                    <Button
                        className="default"
                        text={'Default'}
                        color="Default"
                        icons={true}
                        iconPos="right"
                    />
                </div>
            </div>
            <div className={styles['button-div']}>
                <div>
                    <p>sm</p>
                    <Button
                        className="default"
                        text={'small'}
                        disableShadow={false}
                        color="Default"
                        sizes="small"
                    />
                </div>
                <div>
                    <p>md</p>
                    <Button
                        className="default"
                        text={'medium'}
                        disableShadow={false}
                        color="Default"
                        sizes="medium"
                    />
                </div>
                <div>
                    <p>lg</p>
                    <Button
                        className="default"
                        text={'Large'}
                        disableShadow={false}
                        color="Default"
                        sizes="large"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
