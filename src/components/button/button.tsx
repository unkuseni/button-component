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
    icons?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-buttons-and-templates
 */
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
    });

    return (
        <div className={`${className}`}>
            {/* pass in font awesome as an icon prop */}
            <button disabled={disable} className={classNames(classes, styles.root)}>
                <FontAwesomeIcon icon={faCartShopping} className={styles.root} />
                {text}
            </button>
        </div>
    );
};
