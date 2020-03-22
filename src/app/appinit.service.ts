import { Injectable } from '@angular/core';

@Injectable()
export class AppInitService {

    constructor() {
    }

    public init() {

        return new Promise<void>((resolve, reject) => {
            console.log('Splashscreen start');
            setTimeout(() => {
                console.log('Splashscreen Finished');
                resolve();
            }, 6000);

        });
    }
}
