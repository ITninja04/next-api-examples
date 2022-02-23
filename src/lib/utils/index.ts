import { faker } from "@faker-js/faker";
import { User } from '@/TYPES/user';

export function GetProfileImage<TKey extends {id: number}, TProp extends keyof TKey>(object: TKey, property: TProp) {
  faker.seed(object.id);
  // let retItem = {
  //   ...object
  // }
  // Object.defineProperty(retItem, property, faker.image.avatar());
  return {
    ...object,
  ...{[property]: faker.image.avatar()}
  }
}

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}


export async function GetFakeUser(seedKey?: string | number) {
  return new Promise<User | undefined>((resolve) => {
    try {
      if(seedKey) {
        faker.seed(seedKey);
      }
      const fakeUser: User = {
        username: faker.internet.userName(),
        profilePicture: faker.image.avatar(),
        company: {
          name: faker.company.companyName(),
          catchPhrase: faker.company.catchPhrase(),
          bs: faker.company.bs()
        },
        email: faker.internet.email(),
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        website: faker.internet.url(),
        id: faker.datatype.number({min: 10, max: 25})
      };
      resolve(fakeUser);
    }catch (err) {
      console.error('Error generating fake user.');
      console.error(err);
      resolve(undefined);
    }
  });
}
