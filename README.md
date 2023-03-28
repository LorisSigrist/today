# TODAY
Every day at 00:00 UTC, the site is redeployed and shows the current date.
If this is still working, then [this site](https://today.sigrist.dev) will be showing the current date.



This is intended as demo showing how to redeploy an application based on a CRON-Job, using Github Actions.

This is useful for static sites that have some slowly changing content.
For example: A documentation site that shows how many downloads the NPM package has.

Read `.github/workflows/main.yml` for details.
