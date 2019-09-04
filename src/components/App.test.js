import React from "react";
import {shallow} from "enzyme";
import App from "./App";

describe("App", () => {
    const app = shallow(<App/>);

    it("Renders correctly", () => {
        expect(app).toMatchSnapshot();
    });
    it("Initial state should be empty list og gifts", () => {
        expect(app.state().gifts).toEqual([]);
    });
    describe("When clicking the add button", () => {
        const id = 1;
        beforeEach(() => {
            app.find(".btn-add").simulate("click");
        });
        afterEach(() => {
            app.setState( {gifts: []});
        });
        it("Add gift to state", () => {
            expect(app.state().gifts).toEqual([{id}]);
        });

        it("Add the new gift to the rendered list", () => {
            expect(app.find(".gift_list").children().length).toEqual(1);
        });

        it("Create a gift Component", () => {
            expect(app.find("Gift").exists()).toBe(true);
        });
        describe("User wants to remove the added gift", () => {
            beforeEach(() => {
                app.instance().removeGift(id);
            });

            it("Remove gift from state", () => {
                expect(app.state().gifts).toEqual([]);
            })

        });
    });



});
