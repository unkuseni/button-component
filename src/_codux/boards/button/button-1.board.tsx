import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';
import Classnames from 'classnames';
import Button_module from '../../../components/button/button.module.scss';

export default createBoard({
    name: 'Button 1',
    Board: () => (
        <Button
            text="Danger"
            color="Secondary"
            disable={false}
            disableShadow={false}
            sizes="large"
            className="default"
            icon={'faCartShopping'}
            icons={''}
        />
    ),
    environmentProps: {
        windowWidth: 357,
        windowHeight: 675,
        windowBackgroundColor: '#ffffff',
        canvasWidth: 95,
    },
});
