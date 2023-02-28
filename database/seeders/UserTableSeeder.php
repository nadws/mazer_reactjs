<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create(
            [
                'name' => 'Admin',
                'email' => 'nandw567huih@gmail.com',
                'password' => bcrypt('password'),
            ],
            [
                'name' => 'Admin2',
                'email' => 'nandw567923@gmail.com',
                'password' => bcrypt('password'),
            ],
            [
                'name' => 'Admin3',
                'email' => 'nandw567321@gmail.com',
                'password' => bcrypt('password'),
            ]
        );
    }
}
