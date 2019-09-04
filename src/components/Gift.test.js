import React from "react";
import {shallow} from "enzyme";
import Gift from "./Gift";

describe("Gift", () => {
    const mockRemove = jest.fn();
    const id = 1;
    const props = {gift: {id}, removeGift: mockRemove };
    const gift = shallow(<Gift {...props}/>);
    it("Rendered Gift correctly", () => {
        expect(gift).toMatchSnapshot();
    });

    it("Empty initial state for Gift", () => {
        expect(gift.state()).toEqual({person: "", present: ""});
    });
    describe("When typing some text in the Person field", () => {
        const person = "Uncle";
        beforeEach(() => {
            gift.find(".input_person").simulate("change", {target: {value: person}});
        });

        it("Update the Person in state", () => {
            expect(gift.state().person).toEqual(person);
        });

    });

    describe("When typing some text in the Present field", () => {
        const present = "BMW";
        beforeEach(() => {
            gift.find(".input_present").simulate("change", {target: {value: present}});
        });

        it("Update the Present in state", () => {
            expect(gift.state().present).toEqual(present);
        });
    });

    describe("When clicking the remove gift button", () => {
        beforeEach(() => {
            gift.find(".btn_remove").simulate("click");
        });
        it("call the remove function callback", () => {
            expect(mockRemove).toHaveBeenCalledWith(id);
        })
    })


});