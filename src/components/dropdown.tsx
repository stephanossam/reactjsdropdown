import * as React from "react";
import { Container, ActivatorButton, DropdownList } from "./dropdownStyles";

interface IDropdownItem {
  id: number;
  text: string;
}

interface IProps {
  activatorText?: string;
  items?: IDropdownItem[];
  selected: string | null;
  setSelected: (value: string) => void;
}

const dropdownItems = [
  {
    id: 1,
    text: "Businessman"
  },
  {
    id: 2,
    text: "Employee"
  },
  {
    id: 3,
    text: "Freelancer"
  },
  {
    id: 4,
    text: "Retired"
  }
];

const DropDownSelect = ({
  activatorText = "Dropdown",
  items = dropdownItems,
  selected,
  setSelected
}: IProps) => {
  const activatorRef = React.useRef<HTMLButtonElement | null>(null);
  const listRef = React.useRef<HTMLUListElement | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const keyHandler = (event: React.KeyboardEvent) => {
    if (isOpen) {
      switch (event.key) {
        case "Escape":
          setIsOpen(false);
          break;
        case "ArrowDown":
          const nodeList = listRef.current!.querySelectorAll("a");
          if (activeIndex === items.length - 1) return;
          nodeList[activeIndex + 1].focus();
          break;
        case "ArrowUp":
          const nodeList2 = listRef.current!.querySelectorAll("a");
          if (activeIndex === 0) return;
          nodeList2[activeIndex - 1].focus();
          break;
      }
    }
  };

  const handleClickOutside = (event: any) => {
    if (
      listRef.current!.contains(event.target) ||
      activatorRef.current!.contains(event.target)
    ) {
      return;
    }
    setIsOpen(false);
  };

  React.useEffect(() => {
    if (!listRef.current) {
      return;
    }

    if (isOpen) {
      listRef.current!.querySelector("a")!.focus();
      listRef.current.addEventListener("mouseup", handleClickOutside);
    } else {
      listRef.current.removeEventListener("mouseup", handleClickOutside);
    }
    return () => {
      listRef.current &&
        listRef.current.removeEventListener("mouseup", handleClickOutside);
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) {
      setActiveIndex(-1);
    }
  }, [isOpen]);

  const focusHandler = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Container onKeyUp={keyHandler}>
      <ActivatorButton aria-haspopup="true" aria-controls="selectbox1" onClick={handleClick}
        ref={activatorRef} onFocus={() => setActiveIndex(-1)}
      >
        {selected ? selected : "Select Occupation"}
        
        <span className={`fa ${isOpen ? "fa-angle-up" : "fa-angle-down"}`}></span>
      </ActivatorButton>
      <DropdownList ref={listRef} active={isOpen} role="list" id="selectbox1">
        {items.map((item, index) => (
          <li key={item.id}
            style={{ backgroundColor: item.text === selected ? "#6E2B96" : "white"}}
          
          >
            <a
              href="javascript:void(0)"
              style={{ color: item.text === selected ? "white" : "#6E2B96"}}
              onFocus={() => focusHandler(index)}
              onClick={(e) => {
                e.preventDefault();
                setSelected(item.text);
                setIsOpen(false);
                setActiveIndex(-1);
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </DropdownList>
    </Container>
  );
};

export default DropDownSelect;
