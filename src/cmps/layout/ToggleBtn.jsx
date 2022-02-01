import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';
import { useState } from 'react';

function ToggleBtn({ toggleTheme }) {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        toggleTheme();
        setChecked((prevState) => !prevState);
    };
    return (
        <div className="flex items-center">
            <BsSunFill className={`${!checked && 'text-yellow-400'}`} />
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className="toggle toggle-lg bg-base-content mx-1"
            />
            <FaMoon className={`${checked && 'text-yellow-400'}`} />
        </div>
    );
}

export default ToggleBtn;
