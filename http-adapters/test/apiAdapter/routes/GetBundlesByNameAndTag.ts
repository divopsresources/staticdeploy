import sinon from "sinon";
import request from "supertest";

import { getApiAdapterServer } from "../../testUtils";

describe("apiAdapter GET /bundleNames/:bundleName/bundleTags/:bundleTag/bundles", () => {
    it("200 and returns the filtered bundle tags", () => {
        const execMock = sinon.stub().resolves([]);
        const server = getApiAdapterServer({
            getBundlesByNameAndTag: execMock
        });
        return request(server)
            .get("/bundleNames/bundleName/bundleTags/bundleTag/bundles")
            .expect(200)
            .expect([]);
    });
});
