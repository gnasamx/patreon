import styled from "styled-components";

export const DropdownButton = styled.button`
  box-sizing: border-box;
  height: 3rem;
  cursor: pointer;
  background: rgb(245, 244, 242);
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(229, 227, 221);
  outline: none;
  padding: 0.75rem 1rem;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

  &:hover {
    border-color: rgb(177, 172, 163);
  }

  &:focus {
    background: rgb(255, 255, 255);
    border-color: rgb(0, 76, 129);
    outline: none;
  }
`;

export const DropdownTextIconWrapper = styled.div`
  align-items: flex-start;
  align-content: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0rem;
  margin: 0rem;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;

export const DropdownTextField = styled.div`
  box-sizing: border-box;
  padding: 0rem;
  margin: 0rem 0.75rem 0rem 0rem;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;

export const TextFiledSpan = styled.span`
  color: rgb(36, 30, 18);
  position: relative;
  font-weight: 400 !important;
  font-size: 1rem !important;
  line-height: 1.5 !important;
  margin: 0px;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;

export const DropdownIconField = styled.div`
  align-self: center;
  align-items: center;
  display: inline-flex;
  cursor: unset;
  vertical-align: unset;
  height: 0.75rem;
  width: 0.75rem;
`;

export const DropdownListWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 24px;
  position: absolute;
  max-height: none;
  margin-top: 0.5rem;
  z-index: 900;
  width: auto;
  border-radius: 4px;
  overflow: auto;
`;

export const DropdownListPadding = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  margin: 0rem;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;

export const DropdownListOverflow = styled.div`
  overflow-y: visible;
  white-space: normal;
  margin: -1rem;
`;

export const DropdownListUl = styled.ul`
  margin: 0px;
  text-align: left;
  list-style: none;
  padding: 0px;
`;

export const DropdownListLi = styled.li`
  &:not(:last-child) {
    border-bottom: 2px solid rgb(245, 244, 242);
  }
`;

export const DropdownListLiWrapper = styled.div`
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  margin: 0rem;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;

export const DropdownListLiSpan = styled.span`
  color: rgb(36, 30, 18);
  position: relative;
  font-weight: 400 !important;
  font-size: 1rem !important;
  line-height: 1.5 !important;
  margin: 0px;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;
