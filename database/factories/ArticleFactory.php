<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        // $faker = fake('fa_IR');
        return [
            'title' => fake('fa_IR')->realText(100),
            'content' => fake('fa_IR')->realText(2000),
        ];
    }
}
