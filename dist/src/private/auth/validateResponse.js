"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResponse = void 0;
const tslib_1 = require("tslib");
const side_effects_1 = require("../../resources/side-effects");
function validateResponse(_response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const response = yield _response;
        if (!response.data) {
            if (response) {
                side_effects_1.echo('________________________________________________');
                side_effects_1.echo(response.status, response.statusText);
                side_effects_1.echo(response.headers);
                side_effects_1.echo(response.request);
                side_effects_1.echo(response.status, response.statusText);
                side_effects_1.echo('________________________________________________');
                side_effects_1.echo('++++++++++++++++++++++++++++++++++++++++++++++++');
            }
            throw new Error('!!! validate credntials Invalid data back from http client !!!');
        }
        return response;
    });
}
exports.validateResponse = validateResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcml2YXRlL2F1dGgvdmFsaWRhdGVSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0RBQW9EO0FBSXBELFNBQXNCLGdCQUFnQixDQUNwQyxTQUFrQzs7UUFFbEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxTQUFTLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osbUJBQUksQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO2dCQUN6RCxtQkFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQyxtQkFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkIsbUJBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZCLG1CQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzNDLG1CQUFJLENBQUMsa0RBQWtELENBQUMsQ0FBQztnQkFDekQsbUJBQUksQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO2FBQzFEO1lBRUQsTUFBTSxJQUFJLEtBQUssQ0FDYixnRUFBZ0UsQ0FDakUsQ0FBQztTQUNIO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUFBO0FBdEJELDRDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVjaG8gfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzJztcbmltcG9ydCB0eXBlIHsgQ2xpZW50UmVzcG9uc2UgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHR5cGUgeyBJUmVmcmVzaENyZWRzIH0gZnJvbSAnLi4vLi4vdHlwZXNjcmlwdCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVJlc3BvbnNlKFxuICBfcmVzcG9uc2U6IFByb21pc2U8Q2xpZW50UmVzcG9uc2U+LFxuKTogUHJvbWlzZTxDbGllbnRSZXNwb25zZTxJUmVmcmVzaENyZWRzPj4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IF9yZXNwb25zZTtcblxuICBpZiAoIXJlc3BvbnNlLmRhdGEpIHtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIGVjaG8oJ19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXycpO1xuICAgICAgZWNobyhyZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgZWNobyhyZXNwb25zZS5oZWFkZXJzKTtcbiAgICAgIGVjaG8ocmVzcG9uc2UucmVxdWVzdCk7XG4gICAgICBlY2hvKHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICBlY2hvKCdfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18nKTtcbiAgICAgIGVjaG8oJysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKycpO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICchISEgdmFsaWRhdGUgY3JlZG50aWFscyBJbnZhbGlkIGRhdGEgYmFjayBmcm9tIGh0dHAgY2xpZW50ICEhIScsXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZTtcbn1cbiJdfQ==