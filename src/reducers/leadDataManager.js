import { createSlice } from '@reduxjs/toolkit';

export const leadDataManager = createSlice({
  name: 'lead',
  initialState: {
    value: null,
  },
  reducers: {
    getLeadAction: (
        state,
        action
    ) => {
      state.value = action.payload;
    },
  },
});

export const {  getLeadAction } = leadDataManager.actions;

export const getLeadAsync = leadId => dispatch => {
    dispatch(getLeadAction([ { "id": 1, "first_name": "Skip", "last_name": "Gulston", "email": "igelectrix@gmail.com", "phone_number": "5142907099", "industry": "electrician", "street_address": null, "city": "Montreal", "state": "Quebec", "country": "Canada", "zip_code": null, "company_name": "IG Electrix Inc.", "created_by": 1, "twitter_url": null, "facebook_url": null, "linkedin_url": null, "big_city": "Montreal", "website": "igelectrix.com", "lead_status_id": 4, "comment": null, "source": "in person", "assigned_to": "1", "created_at": "2021-07-26T12:55:39.000000Z", "updated_at": "2021-07-26T15:12:48.000000Z" } ]));
};

export const selectLead = state => state.lead.value;

export default leadDataManager.reducer;
