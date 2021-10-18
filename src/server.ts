import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
// import { filterImageFromURL, deleteLocalFiles } from './util/util';

(async () => {
    const app = express();
    const port = process.env.PORT || 8082;
    app.use(bodyParser.json());

    // TODO:1 IMPLEMENT A RESTFUL ENDPOINT
    // GET /filteredimage?image_url={{URL}}
    // endpoint to filter an image from a public url.
    // IT SHOULD
    //    1. validate the image_url query
    //    2. call filterImageFromURL(image_url) to filter the image
    //    3. send the resulting file in the response
    //    4. deletes any files on the server on finish of the response
    // QUERY PARAMATERS
    //    image_url: URL of a publicly accessible image
    // RETURNS
    //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

    /**************************************************************************** */

    // Root Endpoint
    // Displays a simple message to the user
    // app.get('/', async (_req: Request, res: Response) => {
    //     res.send('try GET /filteredimage?image_url={{}}');
    // });

    app.get('/', async (_req: Request, res: Response) => {
        res.send('Hello World EB');
    });

    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
})();
