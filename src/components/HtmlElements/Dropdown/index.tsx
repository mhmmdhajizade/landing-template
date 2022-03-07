import React, { useEffect, useRef, useState } from "react";
import { DropdownElm, DropdownMenu } from "./styles";

interface IProps {
  btnToggle: React.ReactElement | ((isOpen: boolean) => React.ReactElement);
  children: React.ReactElement | React.ReactElement[];
  placement?: "start" | "end";
}
const DropDown = ({ btnToggle, placement = "start", children }: IProps) => {
  const _refDropdown = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const onToggle = () => {
    setOpen((prev) => !prev);
  };
  const DropdownBtn = React.cloneElement(
    typeof btnToggle === "function" ? btnToggle(isOpen) : btnToggle,
    {
      onClick: onToggle,
    }
  );

  useEffect(function setupListener() {
    function handleClose(event: MouseEvent) {
      const target = event.target;
      if (target instanceof Node && !_refDropdown.current?.contains(target)) {
        setOpen(false);
      }
    }
    window.addEventListener("click", handleClose);
    return function cleanupListener() {
      window.removeEventListener("click", handleClose);
    };
  });
  return (
    <DropdownElm ref={_refDropdown}>
      {DropdownBtn}
      {isOpen && <DropdownMenu placement={placement}>{children}</DropdownMenu>}
    </DropdownElm>
  );
};

export default DropDown;
