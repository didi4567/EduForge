// tests/eduforge.test.js
/**
 * Tests for EduForge module
 */

const { EduForge } = require('../src/eduforge');

describe('EduForge', () => {
    let instance;

    beforeEach(() => {
        instance = new EduForge({ verbose: false });
    });

    test('should create instance with default config', () => {
        expect(instance).toBeDefined();
        expect(instance.timeout).toBe(30000);
        expect(instance.maxRetries).toBe(3);
    });

    test('should execute successfully', async () => {
        const result = await instance.execute();
        expect(result.success).toBe(true);
        expect(result.message).toBeTruthy();
    });

    test('should process data', async () => {
        const result = await instance.process();
        expect(result.processed).toBe(true);
    });
});
