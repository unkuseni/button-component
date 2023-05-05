import classNames from 'classnames';
import styles from './button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
export interface ButtonProps {
    className?: 'default' | 'outline' | 'text';
    disable?: boolean;
    disableShadow?: boolean;
    iconPos?: 'left' | 'right';
    sizes?: 'large' | 'medium' | 'small';
    text?: string;
    color?: 'Primary' | 'Secondary' | 'Danger' | 'Default';
    icons?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
    className,
    disable,
    disableShadow,
    iconPos,
    sizes,
    icons,
    text,
    color,
}: ButtonProps) => {
    const classes = classNames(styles.root, {
        [styles.default]: className === 'default',
        [styles.outline]: className === 'outline',
        [styles.text]: className === 'text',
        [styles.small]: sizes === 'small',
        [styles.medium]: sizes === 'medium',
        [styles.large]: sizes === 'large',
        [styles.primary]: color === 'Primary',
        [styles.secondary]: color === 'Secondary',
        [styles.danger]: color === 'Danger',
        [styles.left]: iconPos === 'left',
        [styles.right]: iconPos === 'right',
    });

    return (
        <div className={classNames(className, styles.root)}>
            <button disabled={disable} className={classNames(classes, styles.default)}>
                {/* pass in an icon */}
                {icons && <FontAwesomeIcon icon={faCartShopping} />}
                {text}
            </button>
        </div>
    );
};
