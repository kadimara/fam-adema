import React from 'react';
import { FaClock, FaList, FaUserFriends } from 'react-icons/fa';
import styled from 'styled-components';

interface RecipeProps {}

export const Recipe: React.FC<RecipeProps> = ({}) => {
    return (
        <Card>
            {/* Image */}
            <Image src="recipes/pasta.png" />
            {/* Title */}
            <Name>Pasta met kip</Name>
            {/* Container */}
            <Description>
                Makkelijk eenpansgerecht met lekker kip en spekjes!!
            </Description>
            {/* Footer */}
            <Footer>
                <div>
                    <FaClock />
                    &nbsp;20 min
                </div>
                <div>
                    <FaUserFriends />
                    &nbsp;4p
                </div>
                <div>
                    <FaList />
                    &nbsp;10
                </div>
            </Footer>
        </Card>
    );
};

const Card = styled.div`
    border: 2px solid ${(props) => props.theme.colors.main};
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.colors.dark};
    width: 200px;
    text-align: center;
    margin: 8px;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 4px 8px ${(props) => props.theme.colors.light};
        margin-top: 4px;
        margin-bottom: 12px;
    }
`;
const Image = styled.img`
    width: 100%;
    height: auto;
    border-top-left-radius: ${(props) => props.theme.borderRadius};
    border-top-right-radius: ${(props) => props.theme.borderRadius};
    border-bottom: 2px solid ${(props) => props.theme.colors.main};
`;
const Name = styled.div`
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 4px;
`;
const Description = styled.div`
    font-size: 14px;
    margin-top: 4px;
    margin-bottom: 16px;
    flex: 1;
    flex-grow: 1;
`;

const Footer = styled.div`
    border-top: 2px solid ${(props) => props.theme.colors.main};
    background: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white};
    flex-direction: row;
    display: flex;
    justify-content: center;

    & > * {
        padding: 5px;
        display: flex;
        align-items: center;
        flex-grow: 1;

        &:not(:first-child) {
            border-left: 1px solid ${(props) => props.theme.colors.white};
        }
    }
`;
