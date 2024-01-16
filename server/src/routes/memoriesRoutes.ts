import { Router } from 'express';
import { body } from 'express-validator';
import { createMemory, getAllMemories } from '../controllers/memoryController';
import { handleInputErrors } from '../modules/handleErrorsMiddleware';

const router = Router();

router.get('/memories', getAllMemories);
router.post('/memories', 
            body('title').exists().isString(),
            body('message').exists().isString(),
            body('creator').exists().isString(),
            handleInputErrors,
            createMemory);

export default router